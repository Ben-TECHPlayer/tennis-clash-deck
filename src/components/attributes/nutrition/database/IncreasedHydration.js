import React from 'react';
import ReactDOM from 'react-dom/client';

function IncreasedHydration(){
    return(
        <div className="item-container">
            <div className="card">
                <img src={`${process.env.PUBLIC_URL}/assets/increased-hydration.svg`} alt="Increased Hydration" />
                <p>Increased Hydration</p>
                <div className="infos-card">
                    <p>Found in Season 2 and above</p>
                    <p>Rare card</p>
                </div>
            </div>
            <div className="table-container">
                <table className="increased-hydration">
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
                            <td>30</td>
                            <td>60</td>
                            <td>150</td>
                            <td>400</td>
                            <td>800</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Price Upgrade</td>
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
                            <td>45.9k</td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
                <table className="increased-hydration">
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
                            <td>3</td>
                            <td>3</td>
                            <td>3</td>
                            <td>3</td>
                            <td>4</td>
                            <td>4</td>
                            <td>4</td>
                            <td>5</td>
                            <td>5</td>
                            <td>6</td>
                            <td>6</td>
                        </tr>
                        <tr>
                            <td>Stamina</td>
                            <td></td>
                            <td></td>
                            <td>3</td>
                            <td>8</td>
                            <td>9</td>
                            <td>12</td>
                            <td>17</td>
                            <td>18</td>
                            <td>21</td>
                            <td>23</td>
                            <td>26</td>
                            <td>28</td>
                            <td>30</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>Total Power</th>
                            <th>2</th>
                            <th>4</th>
                            <th>6</th>
                            <th>11</th>
                            <th>12</th>
                            <th>15</th>
                            <th>21</th>
                            <th>22</th>
                            <th>25</th>
                            <th>28</th>
                            <th>31</th>
                            <th>34</th>
                            <th>36</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
}

export default IncreasedHydration;