import {Component, OnInit, Input} from '@angular/core';
import {SortableService} from '../../../services/sortable.service';
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

    public getColumnValue(obj) {

        for (let item of obj) {
            console.log(Object.values(item));
        }
        // console.log(Object.values
        // return Object.values(obj);

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

    constructor(private sort: SortableService, private help: HelpersService) {}

    ngOnInit() {

    }

}
