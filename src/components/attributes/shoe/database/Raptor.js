import React from 'react';
import ReactDOM from 'react-dom/client';

function Raptor(){
    return(
        <div className="item-container">
            <div className="card">
                <img src={`${process.env.PUBLIC_URL}/assets/the-raptor.svg`} alt="The Raptor" />
                <p>The Raptor</p>
                <div className="infos-card">
                    <p>Found in Season 2 and above</p>
                    <p>Common card</p>
                </div>
            </div>
            <div className="table-container">
                <table className="the-raptor">
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
                            <td>10.9k</td>
                            <td>15k</td>
                            <td>21.7k</td>
                            <td>27.5k</td>
                            <td>45.9k</td>
                            <td>140k</td>
                            <td>280k</td>
                        </tr>
                    </tbody>
                </table>
                <table className="the-raptor">
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
                            <td>Stamina</td>
                            <td>3</td>
                            <td>4</td>
                            <td>4</td>
                            <td>5</td>
                            <td>5</td>
                            <td>5</td>
                            <td>6</td>
                            <td>6</td>
                            <td>7</td>
                            <td>7</td>
                            <td>8</td>
                            <td>8</td>
                            <td>9</td>
                        </tr>
                        <tr>
                            <td>Agility</td>
                            <td>1</td>
                            <td>4</td>
                            <td>7</td>
                            <td>10</td>
                            <td>15</td>
                            <td>20</td>
                            <td>24</td>
                            <td>27</td>
                            <td>25</td>
                            <td>34</td>
                            <td>37</td>
                            <td>40</td>
                            <td>44</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>Total Power</th>
                            <th>4</th>
                            <th>8</th>
                            <th>11</th>
                            <th>15</th>
                            <th>20</th>
                            <th>25</th>
                            <th>30</th>
                            <th>33</th>
                            <th>32</th>
                            <th>41</th>
                            <th>45</th>
                            <th>48</th>
                            <th>53</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
}

export default Raptor;