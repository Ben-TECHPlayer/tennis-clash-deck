import React from 'react';
import ReactDOM from 'react-dom/client';

function Koi(){
    return(
        <div className="item-container">
            <div className="card">
                <img src={`${process.env.PUBLIC_URL}/assets/the-koi.svg`} alt="The Koi" />
                <p>The Koi</p>
                <div className="infos-card">
                    <p>Found in Season 5 and above</p>
                    <p>Epic card</p>
                </div>
            </div>
            <div className="table-container">
                <table className="the-koi">
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
                            <td>21.7K</td>
                            <td>27.5K</td>
                            <td>35.9K</td>
                            <td>45.9K</td>
                            <td>58.4K</td>
                            <td>75K</td>
                            <td>87.5K</td>
                            <td>104.2k</td>
                            <td>183.4k</td>
                            <td>500k</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
                <table className="the-koi">
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
                            <td>7</td>
                            <td>7</td>
                            <td>7</td>
                            <td>12</td>
                            <td>13</td>
                            <td>14</td>
                            <td>14</td>
                            <td>10</td>
                            <td>10</td>
                            <td>11</td>
                            <td>12</td>
                            <td>12</td>
                        </tr>
                        <tr>
                            <td>Volley</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>2</td>
                            <td>5</td>
                            <td>9</td>
                            <td>14</td>
                            <td>16</td>
                            <td>18</td>
                            <td>20</td>
                            <td>22</td>
                            <td>24</td>
                            <td>26</td>
                            <td>28</td>
                            <td>30</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>Total Power</th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th>9</th>
                            <th>12</th>
                            <th>16</th>
                            <th>26</th>
                            <th>29</th>
                            <th>32</th>
                            <th>34</th>
                            <th>32</th>
                            <th>34</th>
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

export default Koi;