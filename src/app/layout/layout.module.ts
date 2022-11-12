import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header/header.component";
import { NzDropDownModule } from "ng-zorro-antd/dropdown";
import { SkeletonComponent } from "./skeleton/skeleton.component";
import { AppRoutingModule } from "./../app-routing.module";

@NgModule({
    declarations: [HeaderComponent, SkeletonComponent],
    imports: [CommonModule, NzDropDownModule, AppRoutingModule],
    exports: [SkeletonComponent]
})
export class LayoutModule {}
