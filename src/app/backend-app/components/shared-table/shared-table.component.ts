import {Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit} from '@angular/core';
import {SortableService} from '../../../services/sortable.service';
import {HelpersService} from '../../../services/helpers.service';
import {SortablejsOptions} from 'ngx-sortablejs';

@Component({
    selector: 'app-shared-table',
    templateUrl: './shared-table.component.html',
    styleUrls: ['./shared-table.component.scss']
})
export class SharedTableComponent implements OnInit, AfterViewInit {

    @Input('moduleModelName') moduleModelName;
    @Input('moduleName') moduleName;
    @Input('columns') columns;
    @Input('itemsView') itemsView;
    @Output() output = new EventEmitter<string>();

    @ViewChild("sortUp", {static: false}) sortUpView: ElementRef;
    @ViewChild("sortDown", {static: false}) sortDownView: ElementRef;

    constructor(private sort: SortableService, private help: HelpersService) {}

    ngOnInit() {

    }

    ngAfterViewInit() {

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

    public getColumnName(name) {
        try {
            if (typeof name !== 'object') {
                throw `this key is not an object : [[ ${name} ]]`;
            }

            return Object.keys(name);
        }
        catch (err) {
            console.log('err: ', err);
        }
    }

    public getColumnValue(name) {
        try {
            if (typeof name !== 'object') {
                throw `this key is not an object : [[ ${name} ]]`;
            }

            return Object.values(name)[0];
        }
        catch (err) {
            console.log('err: ', err);
        }
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
