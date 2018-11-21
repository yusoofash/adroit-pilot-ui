import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { LoaderComponent, BlockUiComponent, PageNotFoundComponent, KeywordsTextboxComponent } from '../common';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  declarations: [
    LoaderComponent,
    BlockUiComponent,
    PageNotFoundComponent,
    KeywordsTextboxComponent
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    LoaderComponent,
    BlockUiComponent,
    PageNotFoundComponent,
    KeywordsTextboxComponent,
    BrowserAnimationsModule,
    ToastrModule,
  ]
})
export class SharedModule { }