import React from 'react';

function Gladiator(){
    return(
        <div className="item-container">
            <div className="card">
                <img src={`${process.env.PUBLIC_URL}/assets/the-gladiator.svg`} alt="The Gladiator" />
                <p>The Gladiator</p>
                <div className="infos-card">
                    <p>Found in Season 9 and above</p>
                    <p>Epic card</p>
                </div>
            </div>
            <div className="table-container-scrollable">
                <div className="table-container">
                    <table className="the-gladiator">
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
                                <td>500</td>
                            </tr>
                            <tr>
                                <td>Price Upgrade</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>104.2k</td>
                                <td>116.7k</td>
                                <td>150k</td>
                                <td>183.4k</td>
                                <td>216.7k</td>
                                <td>250k</td>
                                <td>291.7k</td>
                                <td>333.4k</td>
                                <td>416.7k</td>
                                <td>500k</td>
                                <td>800k</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="table-container">
                    <table className="the-gladiator">
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
                                <td>Volley</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>14</td>
                                <td>18</td>
                                <td>23</td>
                                <td>27</td>
                                <td>30</td>
                                <td>33</td>
                                <td>36</td>
                                <td>39</td>
                                <td>43</td>
                                <td>46</td>
                                <td>49</td>
                                <td>52</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <th>Total Power</th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th>14</th>
                                <th>18</th>
                                <th>23</th>
                                <th>27</th>
                                <th>30</th>
                                <th>33</th>
                                <th>36</th>
                                <th>39</th>
                                <th>43</th>
                                <th>46</th>
                                <th>49</th>
                                <th>52</th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Gladiator;