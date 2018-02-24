import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home';
import { AutocompletePageComponent } from './autocomplete-page/autocomplete-page';
@NgModule({
	declarations: [HomeComponent,
    AutocompletePageComponent],
	imports: [],
	exports: [HomeComponent,
    AutocompletePageComponent]
})
export class ComponentsModule {}
