import React from 'react';
import ReactDOM from 'react-dom/client';

function Anvil(){
    return(
        <div className="item-container">
            <div className="card">
                <img src={`${process.env.PUBLIC_URL}/assets/the-anvil.svg`} alt="The Anvil" />
                <p>The Anvil</p>
                <div className="infos-card">
                    <p>Found in Season 6 and above</p>
                    <p>Rare card</p>
                </div>
            </div>
            <div className="table-container-scrollable">
                <div className="table-container">
                    <table className="the-anvil">
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
                                <td>1.5k</td>
                                <td>5k</td>
                            </tr>
                            <tr>
                                <td>Price Upgrade</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>35.9k</td>
                                <td>45.9k</td>
                                <td>58.4k</td>
                                <td>75k</td>
                                <td>87.5k</td>
                                <td>104.2k</td>
                                <td>116.7k</td>
                                <td>150k</td>
                                <td>183.4k</td>
                                <td>216.7k</td>
                                <td>750k</td>
                                <td>5m</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="table-container">
                    <table className="the-anvil">
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
                                <td>Stamina</td>
                                <td></td>
                                <td></td>
                                <td>4</td>
                                <td>5</td>
                                <td>5</td>
                                <td>6</td>
                                <td>6</td>
                                <td>7</td>
                                <td>7</td>
                                <td>8</td>
                                <td>8</td>
                                <td>9</td>
                                <td>10</td>
                                <td>10</td>
                                <td>11</td>
                            </tr>
                            <tr>
                                <td>Agility</td>
                                <td></td>
                                <td></td>
                                <td>7</td>
                                <td>10</td>
                                <td>13</td>
                                <td>19</td>
                                <td>25</td>
                                <td>27</td>
                                <td>30</td>
                                <td>33</td>
                                <td>36</td>
                                <td>40</td>
                                <td>43</td>
                                <td>46</td>
                                <td>42</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <th>Total Power</th>
                                <th></th>
                                <th></th>
                                <th>11</th>
                                <th>5</th>
                                <th>5</th>
                                <th>6</th>
                                <th>6</th>
                                <th>7</th>
                                <th>7</th>
                                <th>8</th>
                                <th>8</th>
                                <th>9</th>
                                <th>10</th>
                                <th>10</th>
                                <th>11</th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Anvil;