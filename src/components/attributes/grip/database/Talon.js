import React from 'react';

function Talon(){
    return(
        <div className="item-container">
            <div className="card">
                <img src={`${process.env.PUBLIC_URL}/assets/the-talon.svg`} alt="The Talon" />
                <p>The Talon</p>
                <div className="infos-card">
                    <p>Found in Season 2 and above</p>
                    <p>Epic card</p>
                </div>
            </div>
            <div className="table-container">
                <table className="the-talon">
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
                            <td>4.6k</td>
                            <td>7.2k</td>
                            <td>10.9k</td>
                            <td>15k</td>
                            <td>21.7k</td>
                            <td>27.5K</td>
                            <td>45.9k</td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
                <table className="the-talon">
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
                            <td>Forehand</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>7</td>
                            <td>7</td>
                            <td>7</td>
                            <td>7</td>
                            <td>8</td>
                            <td>8</td>
                            <td>9</td>
                            <td>9</td>
                            <td>10</td>
                            <td>11</td>
                        </tr>
                        <tr>
                            <td>Backhand</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>13</td>
                            <td>21</td>
                            <td>23</td>
                            <td>26</td>
                            <td>29</td>
                            <td>32</td>
                            <td>35</td>
                            <td>37</td>
                            <td>39</td>
                            <td>43</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>Total Power</th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th>20</th>
                            <th>28</th>
                            <th>30</th>
                            <th>33</th>
                            <th>37</th>
                            <th>40</th>
                            <th>44</th>
                            <th>46</th>
                            <th>49</th>
                            <th>54</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
}

export default Talon;