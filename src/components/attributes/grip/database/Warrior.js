import React from 'react';

function Warrior(){
    return(
        <div className="item-container">
            <div className="card">
                <img src={`${process.env.PUBLIC_URL}/assets/the-warrior.svg`} alt="The Warrior" />
                <p>The Warrior</p>
                <div className="infos-card">
                    <p>Found in Season 1 and above</p>
                    <p>Common card</p>
                </div>
            </div>
            <div className="table-container-scrollable">
                <div className="table-container">
                    <table className="the-warrior">
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
                                <td>2</td>
                                <td>4</td>
                                <td>10</td>
                                <td>20</td>
                                <td>50</td>
                                <td>150</td>
                                <td>400</td>
                                <td>800</td>
                                <td>1000</td>
                                <td>2000</td>
                                <td>5000</td>
                                <td>8000</td>
                            </tr>
                            <tr>
                                <td>Price Upgrade</td>
                                <td></td>
                                <td>200</td>
                                <td>600</td>
                                <td>1.4k</td>
                                <td>2.5k</td>
                                <td>4.6k</td>
                                <td>7.2k</td>
                                <td>10.9k</td>
                                <td>15k</td>
                                <td>21.7k</td>
                                <td>27.5k</td>
                                <td>100k</td>
                                <td>180k</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="table-container">
                    <table className="the-warrior">
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
                                <td>2</td>
                                <td>3</td>
                                <td>3</td>
                                <td>4</td>
                                <td>4</td>
                                <td>5</td>
                                <td>5</td>
                                <td>5</td>
                                <td>5</td>
                                <td>6</td>
                                <td>6</td>
                                <td>6</td>
                                <td>7</td>
                            </tr>
                            <tr>
                                <td>Backhand</td>
                                <td>3</td>
                                <td>4</td>
                                <td>7</td>
                                <td>9</td>
                                <td>15</td>
                                <td>18</td>
                                <td>21</td>
                                <td>23</td>
                                <td>27</td>
                                <td>30</td>
                                <td>33</td>
                                <td>36</td>
                                <td>38</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <th>Total Power</th>
                                <th>5</th>
                                <th>7</th>
                                <th>10</th>
                                <th>13</th>
                                <th>19</th>
                                <th>23</th>
                                <th>26</th>
                                <th>28</th>
                                <th>32</th>
                                <th>36</th>
                                <th>39</th>
                                <th>42</th>
                                <th>45</th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Warrior;