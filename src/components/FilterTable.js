import React, { Component } from 'react';
import {DataTable} from 'primereact/components/datatable/DataTable';
import {Column} from 'primereact/components/column/Column';
import {InputText} from 'primereact/components/inputtext/InputText';
import {MultiSelect} from 'primereact/components/multiselect/MultiSelect';
import {Button} from 'primereact/components/button/Button';
import CarService from '../service/CarService';



class FilterTable extends Component {

    constructor() {
        super();
        this.state = {
            filters: {}
        };
        this.carservice = new CarService();
        this.export = this.export.bind(this);
        //this.onBrandChange = this.onBrandChange.bind(this);
        this.onColorChange = this.onColorChange.bind(this);
        this.onFilter = this.onFilter.bind(this);
        this.rowExpansionTemplate = this.rowExpansionTemplate.bind(this);
    }

    componentDidMount() {
        this.carservice.getCars()
            .then( data => {
                this.setState({
                    cars: data
                });
            });
    }

    export() {
        this.dt.exportCSV();
    }

    rowExpansionTemplate(data) {
        return  <div className="ui-g ui-fluid">
            <div className="ui-g-12 ui-md-3" style={{textAlign:'center', borderRight: '1px solid #cccccc'}}>

            </div>
            <div className="ui-g-12 ui-md-9">
                <div className="ui-g">
                    <div className="ui-md-2">Vin: </div>
                    <div className="ui-md-10" style={{fontWeight:'bold'}}>{data.vin}</div>

                    <div className="ui-md-2">Year: </div>
                    <div className="ui-md-10" style={{fontWeight:'bold'}}>{data.year}</div>

                    <div className="ui-md-2">Brand: </div>
                    <div className="ui-md-10" style={{fontWeight:'bold'}}>{data.brand}</div>

                    <div className="ui-md-2">Color: </div>
                    <div className="ui-md-10" style={{fontWeight:'bold'}}>{data.color}</div>
                </div>
            </div>
        </div>;
    }

    /*onBrandChange(e) {
        let filters = this.state.filters;
        filters['brand'] = {value: e.value};
        this.setState({filters: filters});
    }*/
    onColorChange(e) {
        let filters = this.state.filters;
        filters['color'] = {value: e.value};
        this.setState({filters: filters});
    }

    onFilter(e) {
        this.setState({filters: e.filters});
    }

    render() {
        const header = <div style={{'textAlign':'left'}}>
            <i className="fa fa-search" style={{margin:'4px 4px 0 0'}}> </i>
            <InputText type="search" onInput={(e) => this.setState({globalFilter: e.target.value})} placeholder="Search" size="50"/>
            <Button type="button" icon="fa-file-o" iconPos="left" label="" onClick={this.export}>CSV</Button>
        </div>;

        /* let brands = [
             {label: 'All Brands', value: null},
             {label: 'Audi', value: 'Audi'},
             {label: 'BMW', value: 'BMW'},
             {label: 'Fiat', value: 'Fiat'},
             {label: 'Honda', value: 'Honda'},
             {label: 'Jaguar', value: 'Jaguar'},
             {label: 'Mercedes', value: 'Mercedes'},
             {label: 'Renault', value: 'Renault'},
             {label: 'VW', value: 'VW'},
             {label: 'Volvo', value: 'Volvo'}
         ];
         let brandFilter = <Dropdown style={{width: '100%'}} className="ui-column-filter" value={this.state.filters.brand ? this.state.filters.brand.value: null} options={brands} onChange={this.onBrandChange}/>

 */        let colors = [
            {label: 'White', value: 'White'},
            {label: 'Green', value: 'Green'},
            {label: 'Silver', value: 'Silver'},
            {label: 'Black', value: 'Black'},
            {label: 'Red', value: 'Red'},
            {label: 'Maroon', value: 'Maroon'},
            {label: 'Brown', value: 'Brown'},
            {label: 'Orange', value: 'Orange'},
            {label: 'Blue', value: 'Blue'}
        ];

        let colorFilter = <MultiSelect style={{width:'100%'}} className="ui-column-filter"
                                       value={this.state.filters.color ? this.state.filters.color.value: null}
                                       options={colors} onChange={this.onColorChange}/>;

        return (

            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        {/*<p>Filtering is enabled by setting the filter property as true in column object. Default match mode is "startsWith" and this can be configured using filterMatchMode
                            property of column object that also accepts "contains", "endsWith", "equals" and "in".
                        </p>*/}
                    </div>
                </div>

                <div className="content-section-implementation">
                    <DataTable value={this.state.cars} paginator={true} rows={10} header={header}
                               globalFilter={this.state.globalFilter} filters={this.state.filters} onFilter={this.onFilter} ref={(el) => { this.dt = el; }}
                               expandedRows={this.state.expandedRows} onRowToggle={(e) => this.setState({expandedRows:e.data})} rowExpansionTemplate={this.rowExpansionTemplate} >
                        <Column expander={true} style={{width: '2em'}} />
                        <Column field="vin" header="Application/URL" filter={false} sortable={true} />
                        <Column field="brand" header="Version" filter={false} sortable={true} />
                        <Column field="year" header="Info" filter={false} sortable={true} />
                        <Column field="color" header="Status" filter={false} sortable={true} filterElement={colorFilter} filterMatchMode="in" />
                    </DataTable>
                </div>
            </div>
        );
    }
}

export default FilterTable;