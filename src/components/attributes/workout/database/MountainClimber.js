import React from 'react';
import ReactDOM from 'react-dom/client';

function MountainClimber(){
    return(
        <div className="item-container">
            <div className="card">
                <img src={`${process.env.PUBLIC_URL}/assets/mountain-climber.svg`} alt="Mountain Climber" />
                <p>Mountain Climber</p>
                <div className="infos-card">
                    <p>Found in Season 9 and above</p>
                    <p>Rare card</p>
                </div>
            </div>
            <div className="table-container">
                <table className="mountain-climber">
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
                            <td></td>
                        </tr>
                        <tr>
                            <td>Price Upgrade</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>87.5k</td>
                            <td>104k</td>
                            <td>116k</td>
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
                <table className="mountain-climber">
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
                            <td>Backhand</td>
                            <td></td>
                            <td></td>
                            <td>3</td>
                            <td>4</td>
                            <td>5</td>
                            <td>5</td>
                            <td>5</td>
                            <td>5</td>
                            <td>6</td>
                            <td>6</td>
                            <td>7</td>
                            <td>7</td>
                            <td>7</td>
                            <td>7</td>
                            <td>8</td>
                        </tr>
                        <tr>
                            <td>Serve</td>
                            <td></td>
                            <td></td>
                            <td>11</td>
                            <td>13</td>
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
                            <th></th>
                            <th></th>
                            <th>14</th>
                            <th>17</th>
                            <th>16</th>
                            <th>21</th>
                            <th>26</th>
                            <th>28</th>
                            <th>31</th>
                            <th>34</th>
                            <th>37</th>
                            <th>40</th>
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

export default MountainClimber;