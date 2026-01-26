import React from 'react';
import ReactDOM from 'react-dom/client';

function WeightLifting(){
    return(
        <div className="item-container">
            <div className="card">
                <img src={`${process.env.PUBLIC_URL}/assets/weight-lifting.svg`} alt="Weight Lifting" />
                <p>Weight Lifting</p>
                <div className="infos-card">
                    <p>Found in Season 5 and above</p>
                    <p>Common card</p>
                </div>
            </div>
            <div className="table-container-scrollable">
                <div className="table-container">
                    <table className="weight-lifting">
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
                                <td>2k</td>
                                <td>4k</td>
                                <td>7k</td>
                                <td>15k</td>
                            </tr>
                            <tr>
                                <td>Price Upgrade</td>
                                <td></td>
                                <td>10.9k</td>
                                <td>12k</td>
                                <td>15k</td>
                                <td>21.7k</td>
                                <td>27.5k</td>
                                <td>35.9k</td>
                                <td>45.9k</td>
                                <td>58.4k</td>
                                <td>75k</td>
                                <td>87.5k</td>
                                <td>104.2k</td>
                                <td>183.4k</td>
                                <td>500k</td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="table-container">
                    <table className="weight-lifting">
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
                                <td>3</td>
                                <td>4</td>
                                <td>5</td>
                                <td>6</td>
                                <td>6</td>
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
                                <td>Serve</td>
                                <td>4</td>
                                <td>6</td>
                                <td>7</td>
                                <td>8</td>
                                <td>11</td>
                                <td>16</td>
                                <td>21</td>
                                <td>23</td>
                                <td>25</td>
                                <td>28</td>
                                <td>30</td>
                                <td>33</td>
                                <td>35</td>
                                <td>38</td>
                                <td>40</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <th>Total Power</th>
                                <th>7</th>
                                <th>10</th>
                                <th>12</th>
                                <th>14</th>
                                <th>17</th>
                                <th>22</th>
                                <th>27</th>
                                <th>30</th>
                                <th>32</th>
                                <th>36</th>
                                <th>38</th>
                                <th>42</th>
                                <th>45</th>
                                <th>48</th>
                                <th>51</th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>      
    );
}

export default WeightLifting;