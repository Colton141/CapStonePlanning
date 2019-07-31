import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink } from 'react-router-dom';

interface FetchRideDataState {
    empList: RideData[];
    loading: boolean;
}

export class FetchRide extends React.Component<RouteComponentProps<{}>, FetchRideDataState> {
    constructor() {
        super();
        this.state = { empList: [], loading: true };

        fetch('api/Ride/Index')
            .then(response => response.json() as Promise<RideData[]>)
            .then(data => {
                this.setState({ empList: data, loading: false });
            });

       // This binding is necessary to make "this" work in the callback
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);

    }

    public render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.renderRideTable(this.state.empList);

        return <div>
            <h1>Ride Data</h1>
            <p>This component demonstrates fetching Ride data from the server.</p>
            <p>
                <Link to="/addride">Create New</Link>
            </p>
            {contents}
        </div>;
    }

    // Handle Delete request for an ride
    private handleDelete(id: number) {
        if (!confirm("Do you want to delete ride with Id: " + id))
            return;
        else {
            fetch('api/Ride/Delete/' + id, {
                method: 'delete'
            }).then(data => {
                this.setState(
                    {
                        empList: this.state.empList.filter((rec) => {
                            return (rec.rideId != id);
                        })
                    });
            });
        }
    }

    private handleEdit(id: number) {
        this.props.history.push("/ride/edit/" + id);
    }

    // Returns the HTML table to the render() method.
    private renderRideTable(empList: RideData[]) {
        return <table className='table'>
            <thead>
                <tr>
                    <th></th>
                    <th>RideId</th>
                    <th>Start</th>
                    <th>End</th>
                    <th>UserName</th>
                </tr>
            </thead>
            <tbody>
                {empList.map(emp =>
                    <tr key={emp.rideId}>
                        <td></td>
                        <td>{emp.rideId}</td>
                        <td>{emp.start}</td>
                        <td>{emp.end}</td>
                        <td>{emp.userName}</td>
                        <td>
                            <a className="action" onClick={(id) => this.handleEdit(emp.rideId)}>Edit</a>  |
                            <a className="action" onClick={(id) => this.handleDelete(emp.rideId)}>Delete</a>
                        </td>
                    </tr>
                )}
            </tbody>
        </table>;
    }
}

export class RideData {
    rideId: number = 0;
    start: string = "";
    end: string = "";
    userNamer: string = "";
} 