import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import { RideData } from './FetchRide';

interface AddRideDataState {
    title: string;
    loading: boolean;
    cityList: Array<any>;
    empData: RideData;
}

export class AddRide extends React.Component<RouteComponentProps<{}>, AddRideDataState> {
    constructor(props) {
        super(props);

        this.state = { title: "", loading: true, cityList: [], empData: new RideData };

        fetch('api/Ride/GetCityList')
            .then(response => response.json() as Promise<Array<any>>)
            .then(data => {
                this.setState({ cityList: data });
            });

        var empid = this.props.match.params["empid"];

        // This will set state for Edit ride
        if (empid > 0) {
            fetch('api/Ride/Details/' + empid)
                .then(response => response.json() as Promise<RideData>)
                .then(data => {
                    this.setState({ title: "Edit", loading: false, empData: data });
                });
        }

        // This will set state for Add ride
        else {
            this.state = { title: "Create", loading: false, cityList: [], empData: new RideData };
        }

        // This binding is necessary to make "this" work in the callback
        this.handleSave = this.handleSave.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    public render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.renderCreateForm(this.state.cityList);

        return <div>
            <h1>{this.state.title}</h1>
            <h3>Ride</h3>
            <hr />
            {contents}
        </div>;
    }

    // This will handle the submit form event.
    private handleSave(event) {
        event.preventDefault();
        const data = new FormData(event.target);

        // PUT request for Edit ride.
        if (this.state.empData.rideId) {
            fetch('api/Ride/Edit', {
                method: 'PUT',
                body: data,

            }).then((response) => response.json())
                .then((responseJson) => {
                    this.props.history.push("/fetchride");
                })
        }

        // POST request for Add ride.
        else {
            fetch('api/Ride/Create', {
                method: 'POST',
                body: data,

            }).then((response) => response.json())
                .then((responseJson) => {
                    this.props.history.push("/fetchride");
                })
        }
    }

    // This will handle Cancel button click event.
    private handleCancel(e) {
        e.preventDefault();
        this.props.history.push("/fetchride");
    }

    // Returns the HTML Form to the render() method.
    private renderCreateForm(cityList: Array<any>) {
        return (
            <form onSubmit={this.handleSave} >
                <div className="form-group row" >
                    <input type="hidden" name="rideId" value={this.state.empData.rideId} />
                </div>
                < div className="form-group row" >
                    <label className=" control-label col-md-12" htmlFor="Start">Start Location</label>
                    <div className="col-md-4">
                        <input className="form-control" type="text" name="start" defaultValue={this.state.empData.start} required />
                        <option value="">-- Select City --</option>
                            {cityList.map(city =>
                                <option key={city.cityId} value={city.cityName}>{city.cityName}</option>
                            )}
                    </div>
                </div >
                < div className="form-group row" >
                    <label className=" control-label col-md-12" htmlFor="End">End Location</label>
                    <div className="col-md-4">
                        <input className="form-control" type="text" name="end" defaultValue={this.state.empData.end} required />
                        <option value="">-- Select City --</option>
                            {cityList.map(city =>
                                <option key={city.cityId} value={city.cityName}>{city.cityName}</option>
                            )}
                    </div>
                </div >
                <div className="form-group row">
                    <label className="control-label col-md-12" htmlFor="UserName" >Users Name</label>
                    <div className="col-md-4">
                        <input className="form-control" type="text" name="UserName" defaultValue={this.state.empData.userName} required />
                    </div>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-default">Save</button>
                    <button className="btn" onClick={this.handleCancel}>Cancel</button>
                </div >
            </form >
        )
    }
}