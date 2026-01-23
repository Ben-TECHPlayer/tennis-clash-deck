import React from 'react';
import ReactDOM from 'react-dom/client';

function StarterBand(){
    return(
        <div className="item-container">
            <div className="card">
                <img src={`${process.env.PUBLIC_URL}/assets/starter-band.svg`} alt="Starter Band" />
                <p>Starter Band</p>
                <div className="infos-card">
                    <p>Alright unlocked</p>
                    <p>Rarety: Common</p>
                </div>
            </div>
            <table className="starter-band">
                <thead>
                    <tr>
                        <th>Level</th>
                        <th>1</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Volley</td>
                        <td>5</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <th>Total Power</th>
                        <th>5</th>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
}

export default StarterBand;