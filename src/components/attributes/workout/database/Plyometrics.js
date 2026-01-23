import React from 'react';

function Plyometrics(){
    return(
        <div className="item-container">
            <div className="card">
                <img src={`${process.env.PUBLIC_URL}/assets/plyometrics.svg`} alt="Plyometrics" />
                <p>Plyometrics</p>
                <div className="infos-card">
                    <p>Unlock to Season 3</p>
                </div>
            </div>
            <div className="table-container">
                <table className="plyometrics">
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
                            <td>5k</td>
                            <td>8k</td>
                        </tr>
                        <tr>
                            <td>Price Upgrade</td>
                            <td></td>
                            <td>2.5k</td>
                            <td>4.6k</td>
                            <td>7.2k</td>
                            <td>10.9k</td>
                            <td>15k</td>
                            <td>21.7k</td>
                            <td>27.5k</td>
                            <td>35.9k</td>
                            <td>45.9k</td>
                            <td>75k</td>
                            <td></td>
                            <td>400k</td>
                        </tr>
                    </tbody>
                </table>
                <table className="plyometrics">
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
                            <td>Backhand</td>
                            <td>3</td>
                            <td>3</td>
                            <td>4</td>
                            <td>4</td>
                            <td>4</td>
                            <td>4</td>
                            <td>4</td>
                            <td>5</td>
                            <td>5</td>
                            <td>6</td>
                            <td>6</td>
                            <td>6</td>
                            <td>7</td>
                        </tr>
                        <tr>
                            <td>Serve</td>
                            <td>1</td>
                            <td>3</td>
                            <td>4</td>
                            <td>8</td>
                            <td>12</td>
                            <td>19</td>
                            <td>21</td>
                            <td>24</td>
                            <td>26</td>
                            <td>29</td>
                            <td>31</td>
                            <td>34</td>
                            <td>36</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>Total Power</th>
                            <th>4</th>
                            <th>6</th>
                            <th>8</th>
                            <th>12</th>
                            <th>16</th>
                            <th>23</th>
                            <th>25</th>
                            <th>29</th>
                            <th>31</th>
                            <th>35</th>
                            <th>37</th>
                            <th>40</th>
                            <th>43</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
}

export default Plyometrics;