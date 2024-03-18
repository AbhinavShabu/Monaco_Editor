import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CodingTestComponent } from './student/coding-test/coding-test.component';
import { QuestionViewComponent } from './student/coding-test/question-view/question-view.component';
import { CodeEditorComponent } from './student/coding-test/code-editor/code-editor.component';
import { ConditionalInputComponent } from './student/coding-test/conditional-input/conditional-input.component';
import { FinalOutputComponent } from './student/coding-test/final-output/final-output.component';

@NgModule({
  declarations: [
    AppComponent,
    CodingTestComponent,
    QuestionViewComponent,
    CodeEditorComponent,
    ConditionalInputComponent,
    FinalOutputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
