import React from 'react';

function Samurai(){
    return(
        <div className="item-container">
            <div className="card">
                <img src={`${process.env.PUBLIC_URL}/assets/the-samurai.svg`} alt="The Samurai" />
                <p>The Samurai</p>
                <div className="infos-card">
                    <p>Found in Season 5 and above</p>
                    <p>Rare card</p>
                </div>
            </div>
            <div className="table-container">
                <table className="the-samurai">
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
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
                <table className="the-samurai">
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
                            <td>3</td>
                            <td>3</td>
                            <td>5</td>
                            <td>3</td>
                            <td>4</td>
                            <td>4</td>
                            <td>5</td>
                            <td>5</td>
                            <td>5</td>
                            <td>5</td>
                            <td>6</td>
                            <td>6</td>
                        </tr>
                        <tr>
                            <td>Forehand</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>10</td>
                            <td>14</td>
                            <td>20</td>
                            <td>23</td>
                            <td>25</td>
                            <td>28</td>
                            <td>31</td>
                            <td>33</td>
                            <td>36</td>
                            <td>38</td>
                            <td>41</td>
                            <td>44</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>Total Power</th>
                            <th>2</th>
                            <th>4</th>
                            <th>6</th>
                            <th>8</th>
                            <th>10</th>
                            <th>12</th>
                            <th>14</th>
                            <th>16</th>
                            <th>18</th>
                            <th>20</th>
                            <th>22</th>
                            <th>24</th>
                            <th>26</th>
                            <th>47</th>
                            <th>50</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
}

export default Samurai;