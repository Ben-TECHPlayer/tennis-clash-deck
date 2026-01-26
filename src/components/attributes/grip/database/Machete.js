import React from 'react';

function Machete(){
    return(
        <div className="item-container">
            <div className="card">
                <img src={`${process.env.PUBLIC_URL}/assets/the-machete.svg`} alt="The Machete" />
                <p>The Machete</p>
                <div className="infos-card">
                    <p>Found in Season 3 and above</p>
                    <p>Rare card</p>
                </div>
            </div>
            <div className="table-container-scrollable">
                <div className="table-container">
                    <table className="the-machete">
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
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Up Cards</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>2</td>
                                <td>4</td>
                                <td>10</td>
                                <td>30</td>
                                <td>60</td>
                                <td>150</td>
                                <td>400</td>
                                <td>800</td>
                                <td>2000</td>
                                <td>4000</td>
                            </tr>
                            <tr>
                                <td>Price Upgrade</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>7.2k</td>
                                <td>10.9k</td>
                                <td>15k</td>
                                <td>21.7k</td>
                                <td>27.5k</td>
                                <td>35.9k</td>
                                <td>45.9k</td>
                                <td>75k</td>
                                <td>200k</td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="table-container">
                    <table className="the-machete">
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
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Backhand</td>
                                <td></td>
                                <td></td>
                                <td>17</td>
                                <td>18</td>
                                <td>20</td>
                                <td>26</td>
                                <td>29</td>
                                <td>32</td>
                                <td>36</td>
                                <td>39</td>
                                <td>42</td>
                                <td>45</td>
                                <td>48</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <th>Total Power</th>
                                <th></th>
                                <th></th>
                                <th>17</th>
                                <th>18</th>
                                <th>20</th>
                                <th>26</th>
                                <th>29</th>
                                <th>32</th>
                                <th>36</th>
                                <th>39</th>
                                <th>42</th>
                                <th>45</th>
                                <th>48</th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Machete;