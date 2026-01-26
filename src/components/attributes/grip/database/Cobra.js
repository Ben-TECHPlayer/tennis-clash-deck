import React from 'react';

function Cobra(){
    return(
        <div className="item-container">
            <div className="card">
                <img src={`${process.env.PUBLIC_URL}/assets/the-cobra.svg`} alt="The Cobra" />
                <p>The Cobra</p>
                <div className="infos-card">
                    <p>Found in Season 4 and above</p>
                    <p>Epic card</p>
                </div>
            </div>
            <div className="table-container-scrollable">
                <div className="table-container">
                    <table className="the-cobra">
                        <caption>The Cobra's Upgrade Table</caption>
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
                                <td>21.7K</td>
                                <td>27.5K</td>
                                <td>35.9K</td>
                                <td>45.9K</td>
                                <td>58.4K</td>
                                <td>75K</td>
                                <td>104.2K</td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="table-container">
                    <table className="the-cobra">
                        <caption>The Cobra's Skills Table</caption>
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
                                <td>Forehand</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>12</td>
                                <td>12</td>
                                <td>12</td>
                                <td>13</td>
                                <td>14</td>
                                <td>15</td>
                                <td>17</td>
                                <td>17</td>
                                <td>18</td>
                                <td>20</td>
                            </tr>
                            <tr>
                                <td>Backhand</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>8</td>
                                <td>15</td>
                                <td>17</td>
                                <td>20</td>
                                <td>22</td>
                                <td>23</td>
                                <td>27</td>
                                <td>29</td>
                                <td>32</td>
                                <td>35</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <th>Total Power</th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th>19</th>
                                <th>26</th>
                                <th>29</th>
                                <th>33</th>
                                <th>36</th>
                                <th>38</th>
                                <th>44</th>
                                <th>46</th>
                                <th>50</th>
                                <th>55</th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Cobra;