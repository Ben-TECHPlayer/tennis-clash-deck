import React from 'react';

function Powerlifting(){
    return(
        <div className="item-container">
            <div className="card">
                <img src={`${process.env.PUBLIC_URL}/assets/powerlifting.svg`} alt="Powerlifting" />
                <p>Powerlifting</p>
                <div className="infos-card">
                    <p>Found in Season 4 and above</p>
                    <p>Epic card</p>
                </div>
            </div>
            <div className="table-container">
                <table className="powerlifting">
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
                            <td>21.7k</td>
                            <td>27.5k</td>
                            <td>35.9k</td>
                            <td>45.9k</td>
                            <td>58.4k</td>
                            <td>75k</td>
                            <td>104.2k</td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
                <table className="powerlifting">
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
                            <td>Stamina</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>12</td>
                            <td>12</td>
                            <td>13</td>
                            <td>13</td>
                            <td>14</td>
                            <td>15</td>
                            <td>16</td>
                            <td>17</td>
                            <td>18</td>
                            <td>20</td>
                        </tr>
                        <tr>
                            <td>Serve</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>6</td>
                            <td>10</td>
                            <td>13</td>
                            <td>17</td>
                            <td>19</td>
                            <td>21</td>
                            <td>23</td>
                            <td>26</td>
                            <td>29</td>
                            <td>31</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>Total Power</th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th>18</th>
                            <th>22</th>
                            <th>26</th>
                            <th>30</th>
                            <th>33</th>
                            <th>36</th>
                            <th>39</th>
                            <th>43</th>
                            <th>47</th>
                            <th>51</th>
                        </tr>
                    </tfoot>
                </table> 
            </div>
        </div>                    
    );
}

export default Powerlifting;