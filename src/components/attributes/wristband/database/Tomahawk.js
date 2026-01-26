import React from 'react';

function Tomahawk(){
    return(
        <div className="item-container">
            <div className="card">
                <img src={`${process.env.PUBLIC_URL}/assets/the-tomahawk.svg`} alt="The Tomahawk" />
                <p>The Tomahawk</p>
                <div className="infos-card">
                    <p>Found in Season 4 and above</p>
                    <p>Epic card</p>
                </div>
            </div>
            <div className="table-container-scrollable">
                <div className="table-container">
                    <table className="the-tomahawk">
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
                                <td>2.5k</td>
                                <td>4.6k</td>
                                <td>7.2k</td>
                                <td>10.9k</td>
                                <td>15k</td>
                                <td>21.7k</td>
                                <td>27.5k</td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="table-container">
                    <table className="the-tomahawk">
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
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>13</td>
                                <td>20</td>
                                <td>21</td>
                                <td>26</td>
                                <td>29</td>
                                <td>32</td>
                                <td>34</td>
                                <td>38</td>
                                <td>41</td>
                                <td>44</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <th>Total Power</th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th>13</th>
                                <th>20</th>
                                <th>21</th>
                                <th>26</th>
                                <th>29</th>
                                <th>32</th>
                                <th>34</th>
                                <th>38</th>
                                <th>41</th>
                                <th>44</th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Tomahawk;