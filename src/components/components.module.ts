import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home';
import { AutocompletePageComponent } from './autocomplete-page/autocomplete-page';
import { FormsModule } from '@angular/forms';
import { IonicModule } from 'ionic-angular';
@NgModule({
	declarations: [HomeComponent,
    AutocompletePageComponent],
	imports: [FormsModule,
		IonicModule.forRoot(HomeComponent,AutocompletePageComponent)],
		
	exports: [HomeComponent,
    AutocompletePageComponent]
})
export class ComponentsModule {}
