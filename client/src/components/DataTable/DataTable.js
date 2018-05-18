import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './DataTable.css';


class DataTable extends Component {
  render(){
      return(
            <div className="col-8 px-0 dtable">
              <div className="innerContent">
                <h1> Results </h1>

                    <table className="table">

                        <thead>
                            <tr>
                            {/*Table definition header*/}
                                <th>#</th>
                                <th>Date/Time</th>
                                <th>City</th>
                                <th>State</th>
                                <th>Country</th>
                                <th>Shape</th>
                                <th>Comments</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>Otto</td>
                            </tr>
                            <tr>
                            <th scope="row">3</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>Otto</td>
                            </tr>
                        </tbody>

                    </table>

              </div>
            </div>
      )
  }
}

export default DataTable;
