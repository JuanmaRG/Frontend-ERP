import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatTableModule} from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaExpertoComponent } from './Pages/lista-experto/lista-experto.component';
import {MatChipsModule} from '@angular/material/chips';
import { FilterPanelComponent } from './Components/filter-panel/filter-panel.component';
import {FormsModule} from '@angular/forms'
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { SidenavComponent } from './Components/sidenav/sidenav.component';
import {MatInputModule} from '@angular/material/input'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListaEtiquetaComponent } from './Pages/lista-etiqueta/lista-etiqueta.component';
import { AddEtiquetaComponent } from './components/add-etiqueta/add-etiqueta.component';
import {MatDialogModule} from '@angular/material/dialog';
import { LogInComponent } from './components/log-in/log-in.component';
import { RegisterComponent } from './components/register/register.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import { AddExpertoComponent } from './components/add-experto/add-experto.component';
@NgModule({
  declarations: [
    AppComponent,
    ListaExpertoComponent,
    FilterPanelComponent,
    SidenavComponent,
    ListaEtiquetaComponent,
    AddEtiquetaComponent,
    LogInComponent,
    RegisterComponent,
    AddExpertoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatChipsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule,
    MatDatepickerModule,
    MatInputModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
