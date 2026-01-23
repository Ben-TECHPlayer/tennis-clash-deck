import React from 'react';

function Kodiak(){
    return(
        <div className="item-container">
            <div className="card">
                <img src={`${process.env.PUBLIC_URL}/assets/the-kodiak.svg`} alt="The Kodiak" />
                <p>The Kodiak</p>
                <div className="infos-card">
                    <p>Found in Season 6 and above</p>
                    <p>Rare card</p>
                </div>
            </div>
            <div className="table-container">
                <table className="the-kodiak">
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
                            <td>1.5k</td>
                        </tr>
                        <tr>
                            <td>Price Upgrade</td>
                            <td></td>
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
                            <td>291.7k</td>
                            <td>750k</td>
                        </tr>
                    </tbody>
                </table>
                <table className="the-kodiak">
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
                            <td>2</td>
                            <td>3</td>
                            <td>3</td>
                            <td>3</td>
                            <td>3</td>
                            <td>4</td>
                            <td>4</td>
                            <td>4</td>
                            <td>5</td>
                            <td>5</td>
                            <td>5</td>
                            <td>6</td>
                            <td>6</td>
                        </tr>
                        <tr>
                            <td>Volley</td>
                            <td></td>
                            <td></td>
                            <td>9</td>
                            <td>12</td>
                            <td>14</td>
                            <td>17</td>
                            <td>19</td>
                            <td>21</td>
                            <td>24</td>
                            <td>26</td>
                            <td>28</td>
                            <td>31</td>
                            <td>33</td>
                            <td>36</td>
                            <td>38</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>Total Power</th>
                            <th></th>
                            <th></th>
                            <th>11</th>
                            <th>15</th>
                            <th>17</th>
                            <th>20</th>
                            <th>22</th>
                            <th>25</th>
                            <th>28</th>
                            <th>30</th>
                            <th>33</th>
                            <th>36</th>
                            <th>38</th>
                            <th>42</th>
                            <th>44</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>  
    );
}

export default Kodiak;