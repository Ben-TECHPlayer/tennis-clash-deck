import React from 'react';
import ReactDOM from 'react-dom/client';

function StarterTraining(){
    return(
        <div className="item-container">
            <div className="card">
                <img src={`${process.env.PUBLIC_URL}/assets/starter-training.svg`} alt="Starter Training" />
                <p>Starter Training</p>
                <div className="infos-card">
                    <p>Alright unlocked</p>
                    <p>Rarety: Common</p>
                </div>
            </div>
            <table className="starter-training">
                <thead>
                    <tr>
                        <th>Level</th>
                        <th>1</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Serve</td>
                        <td>6</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <th>Total Power</th>
                        <th>6</th>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
}

export default StarterTraining;