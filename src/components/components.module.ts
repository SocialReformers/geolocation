import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home';
import { AutocompletePageComponent } from './autocomplete-page/autocomplete-page';
import { FormsModule } from '@angular/forms';
import { IonicModule } from 'ionic-angular';
import { AutoCompleteComponent } from './auto-complete/auto-complete';


@NgModule({
	declarations: [HomeComponent,
    AutocompletePageComponent,
    
    AutoCompleteComponent],
	imports: [FormsModule,
		IonicModule.forRoot(HomeComponent,AutocompletePageComponent)],
		
	exports: [HomeComponent,
    AutocompletePageComponent,

    AutoCompleteComponent]
})
export class ComponentsModule {}
