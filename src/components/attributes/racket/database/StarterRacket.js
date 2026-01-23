import React from 'react';
import ReactDOM from 'react-dom/client';

function StarterRacket(){
    return(
        <div className="item-container">
            <div className="card">
                <img src={`${process.env.PUBLIC_URL}/assets/starter-racket.svg`} alt="Starter Racket" />
                <p>Starter Racket</p>
                <div className="infos-card">
                    <p>Alright unlocked</p>
                    <p>Rarety: Common</p>
                </div>
            </div>
            <table className="starter-racket">
                <thead>
                    <tr>
                        <th>Level</th>
                        <th>1</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Forehand</td>
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

export default StarterRacket;