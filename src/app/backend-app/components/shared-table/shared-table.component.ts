import {Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef} from '@angular/core';
import {SortableService} from '../../../services/sortable.service';
import {CheckboxService} from '../../../services/checkbox.service';
import {HelpersService} from '../../../services/helpers.service';
import {SortablejsOptions} from 'ngx-sortablejs';

@Component({
    selector: 'app-shared-table',
    templateUrl: './shared-table.component.html',
    styleUrls: ['./shared-table.component.scss']
})
export class SharedTableComponent implements OnInit {

    @Input('moduleModelName') moduleModelName;
    @Input('moduleName') moduleName;
    @Input('columns') columns;
    @Input('itemsView') itemsView;

    @Output() output = new EventEmitter<string>();

    @ViewChild("sortUp", {static: false}) sortUpView: ElementRef;
    @ViewChild("sortDown", {static: false}) sortDownView: ElementRef;

    constructor(private sort: SortableService, private checkbox: CheckboxService, private help: HelpersService) {}

    public keepOriginalOrder = (a, b) => a.key;

    ngOnInit() {}

    checkboxStatus(status, field, id) {
        this.checkbox.updateCheckboxStatus(status, field, id, this.moduleModelName).subscribe(
            res => {
                console.log(res)
            });
    }

    public sorting(dir) {

        if (dir == 'desc') {
            this.sortDownView.nativeElement.style.display = "inline-block";
            this.sortUpView.nativeElement.style.display = "none";
        } else if (dir == 'asc') {
            this.sortUpView.nativeElement.style.display = "inline-block";
            this.sortDownView.nativeElement.style.display = "none";
        }

        this.output.emit(dir);
    }

    public getObjectKey(obj: {}, columnName: string): string {
        const item = Object.keys(obj)[0];

        if (item === columnName) {
            return Object.keys(obj)[0];
        }
        return '';
    }

    public getColumnName(obj): Object {
        try {
            if (typeof obj !== 'object') {
                throw `this is not an object : [[ ${obj} ]]`;
            }

            return Object.values(obj)[0];
        }
        catch (err) {
            console.log('err: ', err);
        }
    }

    public getColumnValue(item, columns): Object | boolean {

        const columnKeys = [];

        for (var i = 0; i < columns.length; i++) {
            const keyName = Object.keys(columns[i])[0];
            columnKeys.push(keyName);
        }

        const index = columnKeys.indexOf(item);

        if (index > - 1) {
            return {value: columnKeys[index], type: columns[index]['type']};
        }

        return false;

    }

    options: SortablejsOptions = {
        handle: '.sortItem',
        dataIdAttr: 'data-id',
        // Element dragging ended
        onEnd: function (evt) {

            const arr = [...evt.target['rows']];
            const newItemsOrder = [];
            let id = 0;
            let that = this;
            let n = 0;

            while (n < arr.length) {
                id = parseInt(arr[n]['dataset']['id']);
                newItemsOrder.push({[id]: n});
                n++;
            }
            //we are converting newItemsOrder array to json string, in php we are converting into array

            that.sort.updateSortItems(that.moduleModelName, that.help.parseArrToJsonString(newItemsOrder)).subscribe(
                res => {
                    console.log(res);
                }
            );//send new sort order

        }.bind(this)
    };



}
