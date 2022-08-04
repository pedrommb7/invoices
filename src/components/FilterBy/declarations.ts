export interface InvoiceFilters {
    orderBy: string;
    invoiceState: string;
    client: string;
    dateFrom: string;
    dateTo: string;
}

export interface FilterByProperties {
    isFilterShow: boolean;
	isFilterShownHandler: (isShow: boolean) => boolean;
	handleSubmit: (filters: InvoiceFilters) => void;
}