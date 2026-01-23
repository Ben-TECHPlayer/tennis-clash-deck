import React from 'react';
import ReactDOM from 'react-dom/client';

function Shield(){
    return(
        <div className="item-container">
            <div className="card">
                <img src={`${process.env.PUBLIC_URL}/assets/the-shield.svg`} alt="The Shield" />
                <p>The Shield</p>
                <div className="infos-card">
                    <p>Found in Season 10 and above</p>
                    <p>Rare card</p>
                </div>
            </div>
            <div className="table-container">
                <table className="the-shield">
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
                            <td>210k</td>
                            <td>230k</td>
                            <td>250k</td>
                            <td>300k</td>
                            <td>380k</td>
                            <td>450k</td>
                            <td>530k</td>
                            <td>560k</td>
                            <td>600k</td>
                            <td>700k</td>
                            <td></td>
                            <td>7.5m</td>
                        </tr>
                    </tbody>
                </table>
                <table className="the-shield">
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
                            <td>Serve</td>
                            <td></td>
                            <td></td>
                            <td>5</td>
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
                            <td>9</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>Volley</td>
                            <td></td>
                            <td></td>
                            <td>3</td>
                            <td>6</td>
                            <td>10</td>
                            <td>14</td>
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
                            <th>8</th>
                            <th>11</th>
                            <th>16</th>
                            <th>20</th>
                            <th>25</th>
                            <th>27</th>
                            <th>31</th>
                            <th>33</th>
                            <th>36</th>
                            <th>39</th>
                            <th>42</th>
                            <th>45</th>
                            <th>48</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
}

export default Shield;