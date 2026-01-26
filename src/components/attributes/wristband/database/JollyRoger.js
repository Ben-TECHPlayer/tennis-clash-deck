import React from 'react';

function JollyRoger(){
    return(
        <div className="item-container">
            <div className="card">
                <img src={`${process.env.PUBLIC_URL}/assets/jolly-roger.svg`} alt="Jolly Roger" />
                <p>Jolly Roger</p>
                <div className="infos-card">
                    <p>Found in Season 3 and above</p>
                    <p>Epic card</p>
                </div>
            </div>
            <div className="table-container-scrollable">
                <div className="table-container">
                    <table className="jolly-roger">
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
                    <table className="jolly-roger">
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
                                <td>Serve</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>10</td>
                                <td>10</td>
                                <td>12</td>
                                <td>12</td>
                                <td>13</td>
                                <td>14</td>
                                <td>15</td>
                                <td>16</td>
                                <td>17</td>
                                <td>18</td>
                            </tr>
                            <tr>
                                <td>Volley</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>2</td>
                                <td>8</td>
                                <td>9</td>
                                <td>14</td>
                                <td>16</td>
                                <td>18</td>
                                <td>19</td>
                                <td>22</td>
                                <td>24</td>
                                <td>26</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <th>Total Power</th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th>12</th>
                                <th>18</th>
                                <th>21</th>
                                <th>26</th>
                                <th>29</th>
                                <th>32</th>
                                <th>34</th>
                                <th>38</th>
                                <th>41</th>
                                <th>44</th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>        
    );
}

export default JollyRoger;