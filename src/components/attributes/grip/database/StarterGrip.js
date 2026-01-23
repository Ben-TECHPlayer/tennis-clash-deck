import React from 'react';

function StarterGrip(){
    return(
        <div className="item-container">
            <div className="card">
                <img src={`${process.env.PUBLIC_URL}/assets/starter-grip.svg`} alt="Starter Grip" />
                <p>Starter Grip</p>
                <div className="infos-card">
                    <p>Alright unlocked</p>
                    <p>Common card</p>
                </div>
            </div>
            <table className="starter-grip">
                <thead>
                    <tr>
                        <th>Level</th>
                        <th>1</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Backhand</td>
                        <td>8</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <th>Total Power</th>
                        <th>8</th>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
}

export default StarterGrip;