import { Component, OnInit, OnDestroy } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { RouterExtensions } from "nativescript-angular/router";

import * as app from "tns-core-modules/application";

@Component({
    selector: "test-no-destroy-page",
    templateUrl: "./test-no-destroy-page.component.html"
})
export class TestNoDestroyPageComponent implements OnInit, OnDestroy {

  constructor(
    private routerExtensions: RouterExtensions,
  ) {
        // Use the component constructor to inject providers.
  }

  ngOnInit(): void {
    // // console.log( "TestNoDestroyPageComponent::ngOnInit()" );
  }

  ngOnDestroy(): void {
    // console.log( "TestNoDestroyPageComponent::ngOnDestroy()" );
  }

  onDrawerButtonTap(): void {
      const sideDrawer = <RadSideDrawer>app.getRootView();
      sideDrawer.showDrawer();
  }

  // -----------------------------------------------------

  public goBack() {
    this.routerExtensions.backToPreviousPage();
  }

}
