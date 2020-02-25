import {Component, OnInit} from '@angular/core';
import {ModulesService} from '../../../services/modules.service';
import {Module} from '../../../models/module.model';

@Component({
    selector: 'app-modules',
    templateUrl: './modules.component.html',
    styleUrls: ['./modules.component.scss']
})
export class ModulesComponent implements OnInit {

    public moduleView: Module[] = [];

    constructor(private modulesService: ModulesService) {}

    ngOnInit() {
        this.modulesService.getModules().subscribe(
            res => {
                this.moduleView = res;
            }
        );
    }

}
