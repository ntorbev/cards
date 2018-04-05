import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { UserService } from './user.service';

@NgModule({
  declarations: []
})
export class CoreModule {

  constructor(@Optional() @SkipSelf() parent: CoreModule) {
    if (parent) {
      throw new Error('Core module is already provided elsewhere!');
    }
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [UserService]
    };
  }
}
