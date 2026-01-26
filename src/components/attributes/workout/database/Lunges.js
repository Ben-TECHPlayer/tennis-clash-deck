import React from 'react';
import ReactDOM from 'react-dom/client';

function Lunges(){
    return(
        <div className="item-container">
            <div className="card">
                <img src={`${process.env.PUBLIC_URL}/assets/lunges.svg`} alt="Lunges" />
                <p>Lunges</p>
                <div className="infos-card">
                    <p>Unlock to Season 10</p>
                </div>
            </div>
            <div className="table-container-scrollable">
                <div className="table-container">
                    <table className="lunges">
                        <caption>Upgrade Table</caption>
                        <thead>
                            <tr>
                                <th>Level</th>
                                <th>1</th>
                                <th>2</th>
                                <th>3</th>
                                <th>4</th>
                                <th>5</th>
                                <th>6</th>
                                <th>7</th>
                                <th>8</th>
                                <th>9</th>
                                <th>10</th>
                                <th>11</th>
                                <th>12</th>
                                <th>13</th>
                                <th>14</th>
                                <th>15</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Up Cards</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>2</td>
                                <td>4</td>
                                <td>10</td>
                                <td>20</td>
                                <td>40</td>
                                <td>60</td>
                                <td>100</td>
                                <td>150</td>
                                <td>300</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Price Upgrade</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>230K</td>
                                <td>250k</td>
                                <td>300k</td>
                                <td>380k</td>
                                <td>450k</td>
                                <td>530k</td>
                                <td>560k</td>
                                <td>600k</td>
                                <td>700k</td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="table-container">
                    <table className="lunges">
                        <caption>Skills Table</caption>
                        <thead>
                            <tr>
                                <th>Level</th>
                                <th>1</th>
                                <th>2</th>
                                <th>3</th>
                                <th>4</th>
                                <th>5</th>
                                <th>6</th>
                                <th>7</th>
                                <th>8</th>
                                <th>9</th>
                                <th>10</th>
                                <th>11</th>
                                <th>12</th>
                                <th>13</th>
                                <th>14</th>
                                <th>15</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Serve</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>15</td>
                                <td>20</td>
                                <td>24</td>
                                <td>29</td>
                                <td>32</td>
                                <td>35</td>
                                <td>39</td>
                                <td>42</td>
                                <td>45</td>
                                <td>48</td>
                                <td>51</td>
                                <td>54</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <th>Total Power</th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th>15</th>
                                <th>20</th>
                                <th>24</th>
                                <th>29</th>
                                <th>32</th>
                                <th>35</th>
                                <th>39</th>
                                <th>42</th>
                                <th>45</th>
                                <th>48</th>
                                <th>51</th>
                                <th>54</th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Lunges;