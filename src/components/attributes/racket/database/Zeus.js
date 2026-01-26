import React from 'react';

function Zeus(){
    return(
        <div className="item-container">
            <div className="card">
                <img src={`${process.env.PUBLIC_URL}/assets/zeus.svg`} alt="Zeus" />
                <p>Zeus</p>
                <div className="infos-card">
                    <p>Unlock to Season 10 and above</p>
                    <p>Epic card</p>
                </div>
            </div>
            <div className="table-container-scrollable">
                <div className="table-container">
                    <table className="zeus">
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
                                <td>50</td>
                                <td>100</td>
                                <td>200</td>
                                <td>400</td>
                                <td>800</td>
                                <td>1k</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Price Upgrade</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>210k</td>
                                <td>250k</td>
                                <td>300k</td>
                                <td>380k</td>
                                <td>450k</td>
                                <td>530k</td>
                                <td>560k</td>
                                <td>600k</td>
                                <td>700k</td>
                                <td>1.85m</td>
                                <td>7m</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="table-container">
                    <table className="zeus">
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
                                <td>Agility</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>7</td>
                                <td>7</td>
                                <td>7</td>
                                <td>7</td>
                                <td>8</td>
                                <td>9</td>
                                <td>9</td>
                                <td>10</td>
                                <td>10</td>
                                <td>11</td>
                                <td>12</td>
                                <td>12</td>
                            </tr>
                            <tr>
                                <td>Forehand</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>6</td>
                                <td>10</td>
                                <td>14</td>
                                <td>18</td>
                                <td>21</td>
                                <td>23</td>
                                <td>25</td>
                                <td>27</td>
                                <td>29</td>
                                <td>32</td>
                                <td>34</td>
                                <td>36</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <th>Total Power</th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th>13</th>
                                <th>17</th>
                                <th>21</th>
                                <th>25</th>
                                <th>29</th>
                                <th>32</th>
                                <th>34</th>
                                <th>37</th>
                                <th>39</th>
                                <th>43</th>
                                <th>46</th>
                                <th>48</th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Zeus;