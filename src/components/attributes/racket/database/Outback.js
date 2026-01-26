import React from 'react';

function Outback(){
    return(
        <div className="item-container">
            <div className="card">
                <img src={`${process.env.PUBLIC_URL}/assets/the-outback.svg`} alt="The Outback" />
                <p>The Outback</p>
                <div className="infos-card">
                    <p>Found in Season 3 and above</p>
                    <p>Epic card</p>
                </div>
            </div>
            <div className="table-container-scrollable">
                <div className="table-container">
                    <table className="the-outback">
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
                                <td></td>
                                <td>2</td>
                                <td>4</td>
                                <td>10</td>
                                <td>30</td>
                                <td>60</td>
                                <td>120</td>
                                <td>240</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Price Upgrade</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>10.9k</td>
                                <td>15k</td>
                                <td>21.7k</td>
                                <td>27.5k</td>
                                <td>35.9k</td>
                                <td>45.9k</td>
                                <td>75k</td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="table-container">
                    <table className="the-outback">
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
                                <td>Forehand</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>15</td>
                                <td>18</td>
                                <td>20</td>
                                <td>21</td>
                                <td>25</td>
                                <td>26</td>
                                <td>29</td>
                                <td>32</td>
                                <td>34</td>
                            </tr>
                            <tr>
                                <td>Backhand</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>11</td>
                                <td>12</td>
                                <td>13</td>
                                <td>14</td>
                                <td>16</td>
                                <td>16</td>
                                <td>17</td>
                                <td>18</td>
                                <td>20</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <th>Total Power</th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th>26</th>
                                <th>30</th>
                                <th>33</th>
                                <th>35</th>
                                <th>41</th>
                                <th>42</th>
                                <th>46</th>
                                <th>50</th>
                                <th>54</th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Outback;