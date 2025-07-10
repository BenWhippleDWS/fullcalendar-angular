import * as i0 from '@angular/core';
import { TemplateRef, AfterViewInit, DoCheck, AfterContentChecked, OnDestroy, ElementRef, ChangeDetectorRef, OnChanges, SimpleChanges } from '@angular/core';
import { CalendarOptions, Calendar } from '@fullcalendar/core';
import { CustomRendering } from '@fullcalendar/core/internal';
import * as i4 from '@angular/common';

type CalendarOption<OptionName> = OptionName extends keyof CalendarOptions ? CalendarOptions[OptionName] : never;
type CalendarTemplateRef<OptionName> = TemplateRef<{
    $implicit: CalendarArgLookup<OptionName>;
}>;
type CalendarArgLookup<OptionName> = OptionName extends keyof CalendarOptions ? FirstParam<CalendarOptions[OptionName]> : never;
type FirstParam<Func> = Func extends ((...args: any) => any) ? Parameters<Func>[0] : never;

declare class FullCalendarComponent implements AfterViewInit, DoCheck, AfterContentChecked, OnDestroy {
    private element;
    options?: CalendarOptions;
    deepChangeDetection?: boolean;
    events?: CalendarOption<'events'> | null | undefined;
    eventSources?: CalendarOption<'eventSources'> | null | undefined;
    resources?: CalendarOption<'resources'> | null | undefined;
    dayHeaderContent?: CalendarTemplateRef<'dayHeaderContent'>;
    dayCellContent?: CalendarTemplateRef<'dayCellContent'>;
    weekNumberContent?: CalendarTemplateRef<'weekNumberContent'>;
    nowIndicatorContent?: CalendarTemplateRef<'nowIndicatorContent'>;
    eventContent?: CalendarTemplateRef<'eventContent'>;
    slotLaneContent?: CalendarTemplateRef<'slotLaneContent'>;
    slotLabelContent?: CalendarTemplateRef<'slotLabelContent'>;
    allDayContent?: CalendarTemplateRef<'allDayContent'>;
    moreLinkContent?: CalendarTemplateRef<'moreLinkContent'>;
    noEventsContent?: CalendarTemplateRef<'noEventsContent'>;
    resourceAreaHeaderContent?: CalendarTemplateRef<'resourceAreaHeaderContent'>;
    resourceGroupLabelContent?: CalendarTemplateRef<'resourceGroupLabelContent'>;
    resourceLabelContent?: CalendarTemplateRef<'resourceLabelContent'>;
    resourceLaneContent?: CalendarTemplateRef<'resourceLaneContent'>;
    resourceGroupLaneContent?: CalendarTemplateRef<'resourceGroupLaneContent'>;
    private calendar;
    private optionSnapshot;
    private handleCustomRendering;
    private customRenderingMap;
    private customRenderingArray?;
    constructor(element: ElementRef, changeDetector: ChangeDetectorRef);
    ngAfterViewInit(): void;
    ngDoCheck(): void;
    ngAfterContentChecked(): void;
    ngOnDestroy(): void;
    get customRenderings(): CustomRendering<any>[];
    getApi(): Calendar;
    private buildInputOptions;
    private buildExtraOptions;
    trackCustomRendering(index: number, customRendering: CustomRendering<any>): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<FullCalendarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FullCalendarComponent, "full-calendar", never, { "options": { "alias": "options"; "required": false; }; "deepChangeDetection": { "alias": "deepChangeDetection"; "required": false; }; "events": { "alias": "events"; "required": false; }; "eventSources": { "alias": "eventSources"; "required": false; }; "resources": { "alias": "resources"; "required": false; }; }, {}, ["dayHeaderContent", "dayCellContent", "weekNumberContent", "nowIndicatorContent", "eventContent", "slotLaneContent", "slotLabelContent", "allDayContent", "moreLinkContent", "noEventsContent", "resourceAreaHeaderContent", "resourceGroupLabelContent", "resourceLabelContent", "resourceLaneContent", "resourceGroupLaneContent"], never, false, never>;
}

declare class OffscreenFragmentComponent implements AfterViewInit, OnDestroy {
    private element;
    constructor(element: ElementRef);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<OffscreenFragmentComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<OffscreenFragmentComponent, "offscreen-fragment", never, {}, {}, never, ["*"], false, never>;
}

declare class TransportContainerComponent implements OnChanges, AfterViewInit, OnDestroy {
    inPlaceOf: HTMLElement;
    reportEl: (el: HTMLElement | null) => void;
    elTag: string;
    elClasses?: string[];
    elStyle?: Record<string, unknown>;
    elAttrs?: Record<string, unknown>;
    template: TemplateRef<any>;
    renderProps?: any;
    rootElRef?: ElementRef;
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TransportContainerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TransportContainerComponent, "transport-container", never, { "inPlaceOf": { "alias": "inPlaceOf"; "required": false; }; "reportEl": { "alias": "reportEl"; "required": false; }; "elTag": { "alias": "elTag"; "required": false; }; "elClasses": { "alias": "elClasses"; "required": false; }; "elStyle": { "alias": "elStyle"; "required": false; }; "elAttrs": { "alias": "elAttrs"; "required": false; }; "template": { "alias": "template"; "required": false; }; "renderProps": { "alias": "renderProps"; "required": false; }; }, {}, never, never, false, never>;
}

declare class FullCalendarModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<FullCalendarModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<FullCalendarModule, [typeof FullCalendarComponent, typeof OffscreenFragmentComponent, typeof TransportContainerComponent], [typeof i4.CommonModule], [typeof FullCalendarComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<FullCalendarModule>;
}

export { FullCalendarComponent, FullCalendarModule };
