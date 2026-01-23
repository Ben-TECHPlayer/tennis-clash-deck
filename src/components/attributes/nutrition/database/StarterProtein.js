import React from 'react';
import ReactDOM from 'react-dom/client';

function StarterProtein(){
    return(
        <div className="item-container">
            <div className="card">
                <img src={`${process.env.PUBLIC_URL}/assets/starter-protein.svg`} alt="Starter Protein" />
                <p>Starter Protein</p>
                <div className="infos-card">
                    <p>Alright unlocked</p>
                    <p>Rarety: Common</p>
                </div>
            </div>
            <table className="starter-protein">
                <thead>
                    <tr>
                        <th>Level</th>
                        <th>1</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Stamina</td>
                        <td>4</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <th>Total Power</th>
                        <th>4</th>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
}

export default StarterProtein;