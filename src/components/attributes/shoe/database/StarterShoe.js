import React from 'react';
import ReactDOM from 'react-dom/client';

function StarterShoe(){
    return(
        <div className="item-container">
            <div className="card">
                <img src={`${process.env.PUBLIC_URL}/assets/starter-shoe.svg`} alt="Starter Shoe" />
                <p>Starter Shoe</p>
                <div className="infos-card">
                    <p>Alright unlocked</p>
                    <p>Rarety: Common</p>
                </div>
            </div>
            <table className="starter-shoe">
                <thead>
                    <tr>
                        <th>Level</th>
                        <th>1</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Agility</td>
                        <td>1</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <th>Total Power</th>
                        <th>1</th>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
}

export default StarterShoe;