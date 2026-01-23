import React from 'react';
import ReactDOM from 'react-dom/client';

function KetoSourcing(){
    return(
        <div className="item-container">
            <div className="card">
                <img src={`${process.env.PUBLIC_URL}/assets/keto-sourcing.svg`} alt="Keto Sourcing" />
                <p>Keto Sourcing</p>
                <div className="infos-card">
                    <p>Found in Season 5 and above</p>
                    <p>Epic card</p>
                </div>
            </div>
            <div className="table-container">
                <table className="keto-sourcing">
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
                            <td>87.5k</td>
                            <td>104.2k</td>
                            <td>183.4k</td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
                <table className="keto-sourcing">
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
                            <td></td>
                            <td>18</td>
                            <td>20</td>
                            <td>23</td>
                            <td>26</td>
                            <td>29</td>
                            <td>32</td>
                            <td>35</td>
                            <td>38</td>
                            <td>41</td>
                            <td>44</td>
                            <td>47</td>
                            <td>49</td>
                        </tr>
                        
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>Total Power</th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th>18</th>
                            <th>20</th>
                            <th>23</th>
                            <th>26</th>
                            <th>29</th>
                            <th>32</th>
                            <th>35</th>
                            <th>38</th>
                            <th>41</th>
                            <th>44</th>
                            <th>47</th>
                            <th>49</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>                   
    );
}

export default KetoSourcing;