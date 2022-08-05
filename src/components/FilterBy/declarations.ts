export interface InvoiceFilters {
    orderBy: string;
    invoiceState: string;
    client: string;
    dateFrom: string;
    dateTo: string;
}

export interface FilterByProperties {
    isFilterShow: boolean;
	isFilterShownHandler: (isShow: boolean) => void;
	handleSubmit: (filters: InvoiceFilters) => void;
}