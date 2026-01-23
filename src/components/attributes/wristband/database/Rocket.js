import React from 'react';

function Rocket(){
    return(
        <div className="item-container">
            <div className="card">
                <img src={`${process.env.PUBLIC_URL}/assets/the-rocket.svg`} alt="The Rocket" />
                <p>The Rocket</p>
                <div className="infos-card">
                    <p>Found in Season 2 and above</p>
                    <p>Common card</p>
                </div>
            </div>
            <div className="table-container">
                <table className="the-rocket">
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
                            <td>1k</td>
                            <td>2k</td>
                            <td>4k</td>
                            <td>8k</td>
                        </tr>
                        <tr>
                            <td>Price Upgrade</td>
                            <td></td>
                            <td>0.6k</td>
                            <td>1.4k</td>
                            <td>2.5k</td>
                            <td>4.6k</td>
                            <td>7.2k</td>
                            <td>10.9K</td>
                            <td>15k</td>
                            <td>21.7k</td>
                            <td>27.5k</td>
                            <td>45.9k</td>
                            <td>58k</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
                <table className="the-rocket">
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
                            <td>Agility</td>
                            <td>2</td>
                            <td>3</td>
                            <td>3</td>
                            <td>3</td>
                            <td>3</td>
                            <td>3</td>
                            <td>3</td>
                            <td>3</td>
                            <td>4</td>
                            <td>4</td>
                            <td>7</td>
                            <td>7</td>
                            <td>8</td>
                        </tr>
                        <tr>
                            <td>Volley</td>
                            <td>0</td>
                            <td>1</td>
                            <td>3</td>
                            <td>12</td>
                            <td>14</td>
                            <td>17</td>
                            <td>19</td>
                            <td>22</td>
                            <td>24</td>
                            <td>27</td>
                            <td>29</td>
                            <td>32</td>
                            <td>34</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>Total Power</th>
                            <th>2</th>
                            <th>4</th>
                            <th>6</th>
                            <th>15</th>
                            <th>17</th>
                            <th>20</th>
                            <th>22</th>
                            <th>25</th>
                            <th>28</th>
                            <th>31</th>
                            <th>36</th>
                            <th>39</th>
                            <th>42</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>                                 
    );
}

export default Rocket;