import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './DataTable.css';


const DataTable = props => {
  let displayResults = props.data.map( sighting => {
    return(
      <tr>
        <td>{sighting.datetime}</td>
        <td>{sighting.city}</td>
        <td>{sighting.state}</td>
        <td>{sighting.country}</td>
        <td>{sighting.comments}</td>
      </tr>
    )
  })
      return(
            <div className="col-8 px-0 dtable">
              <div className="innerContent">
                <h1> Results </h1>

                    <table className="table">

                        <thead>
                            <tr>
                                <th>Date/Time</th>
                                <th>City</th>
                                <th>State</th>
                                <th>Country</th>
                                <th>Comments</th>
                            </tr>
                        </thead>

                        <tbody>
                          {displayResults}
                        </tbody>

                    </table>

              </div>
            </div>
      )

}

export default DataTable;
