<template>
    <ag-grid-vue style="width: 500px; height: 500px;"
                 class="ag-theme-balham"
                 :columnDefs="columnDefs"
                 :rowData="rowData"
                 :components="components"
                 :firstDataRendered="this.onFirstDataRendered">
    </ag-grid-vue>
</template>

<script>
    import {AgGridVue} from "ag-grid-vue";
    import PriceCellRenderer from "../components/PriceCellRenderer";

    import '../../node_modules/ag-grid-community/dist/styles/ag-grid.css'
    import '../../node_modules/ag-grid-community/dist/styles/ag-theme-balham.css'

    export default {
        name: 'App',
        data() {
            return {
                columnDefs: null,
                rowData: null,
                components: {
                    PriceCellRenderer
                }
            }
        },
        components: {
            AgGridVue,
            PriceCellRenderer
        },
        beforeMount() {
            this.columnDefs = [
                {headerName: 'Make', field: 'make'},
                {headerName: 'Model', field: 'model'},
                {headerName: 'Price', field: 'price'},
                {
                    field: 'price',
                    cellRendererFramework: 'PriceCellRenderer',
                    cellRendererParams: {
                        cellStyle: { backgroundColor : 'lightblue' }
                    }
                }
            ];

            this.rowData = [
                {make: 'Toyota', model: 'Celica', price: 35000},
                {make: 'Ford', model: 'Mondeo', price: 32000},
                {make: 'Porsche', model: 'Boxter', price: 72000}
            ];
        },
        methods: {
            onFirstDataRendered(params) {
                params.api.sizeColumnsToFit();
            }
        }
    }
</script>