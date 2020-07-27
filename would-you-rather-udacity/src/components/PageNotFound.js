import React, { Component } from 'react';

class PageNotFound extends Component {
    render() { 
        return ( 
            <div className='container mt-5'>
                <div className='row justify-content-md-center'>
                    <div className='col-md-6 d-flex justify-content-center'>
                        <h2 className='text-muted'>Page Not Found(404)</h2>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default PageNotFound;