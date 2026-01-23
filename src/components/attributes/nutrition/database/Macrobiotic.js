import React from 'react';
import ReactDOM from 'react-dom/client';

function Macrobiotic(){
    return(
        <div className="item-container">
            <div className="card">
                <img src={`${process.env.PUBLIC_URL}/assets/macrobiotic.svg`} alt="Macrobiotic" />
                <p>Macrobiotic</p>
                <div className="infos-card">
                    <p>Found in Season 3 and above</p>
                    <p>Epic card</p>
                </div>
            </div>
            <div className="table-container">
                <table className="macrobiotic">
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
                            <td>58.4k</td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
                <table className="macrobiotic">
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
                            <td>Volley</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>12</td>
                            <td>12</td>
                            <td>14</td>
                            <td>14</td>
                            <td>15</td>
                            <td>16</td>
                            <td>17</td>
                            <td>19</td>
                            <td>20</td>
                            <td>21</td>
                        </tr>
                        <tr>
                            <td>Stamina</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>1</td>
                            <td>8</td>
                            <td>9</td>
                            <td>11</td>
                            <td>13</td>
                            <td>15</td>
                            <td>17</td>
                            <td>18</td>
                            <td>20</td>
                            <td>22</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>Total Power</th>
                            <th>4</th>
                            <th>6</th>
                            <th>8</th>
                            <th>13</th>
                            <th>20</th>
                            <th>23</th>
                            <th>25</th>
                            <th>28</th>
                            <th>31</th>
                            <th>34</th>
                            <th>37</th>
                            <th>40</th>
                            <th>43</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
}

export default Macrobiotic;