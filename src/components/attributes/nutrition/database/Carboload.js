import React from 'react';

function Carboload(){
    return(
        <div className="item-container">
            <div className="card">
                <img src={`${process.env.PUBLIC_URL}/assets/carboload.svg`} alt="The Machete" />
                <p>Carboload</p>
                <div className="infos-card">
                    <p>Found in Season 9 and above</p>
                    <p>Epic card</p>
                </div>
            </div>
            <div className="table-container">
                <table className="carboload">
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
                            <td>500</td>
                            <td></td>
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
                            <td>1.2m</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
                <table className="carboload">
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
                            <td>Forehand</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>8</td>
                            <td>9</td>
                            <td>10</td>
                            <td>10</td>
                            <td>11</td>
                            <td>12</td>
                            <td>13</td>
                            <td>14</td>
                            <td>15</td>
                            <td>15</td>
                            <td>16</td>
                            <td>17</td>
                        </tr>
                        <tr>
                            <td>Stamina</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>6</td>
                            <td>8</td>
                            <td>8</td>
                            <td>11</td>
                            <td>13</td>
                            <td>15</td>
                            <td>17</td>
                            <td>18</td>
                            <td>20</td>
                            <td>22</td>
                            <td>24</td>
                            <td>25</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>Total Power</th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th>14</th>
                            <th>17</th>
                            <th>18</th>
                            <th>21</th>
                            <th>24</th>
                            <th>27</th>
                            <th>30</th>
                            <th>32</th>
                            <th>35</th>
                            <th>37</th>
                            <th>40</th>
                            <th>42</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>                              
    );
}

export default Carboload;